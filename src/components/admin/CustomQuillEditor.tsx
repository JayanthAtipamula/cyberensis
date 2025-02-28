import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill-custom.css'; // We'll keep this for styling

export interface CustomQuillEditorRef {
  getEditor: () => any;
  focus: () => void;
}

interface CustomQuillEditorProps extends ReactQuillProps {
  value: string;
  onChange: (value: string) => void;
}

const CustomQuillEditor = forwardRef<CustomQuillEditorRef, CustomQuillEditorProps>(
  ({ value, onChange, modules, ...rest }, ref) => {
    const quillRef = useRef<ReactQuill>(null);

    useImperativeHandle(ref, () => ({
      getEditor: () => {
        return quillRef.current?.getEditor();
      },
      focus: () => {
        quillRef.current?.focus();
      }
    }));

    // Add event listeners for image handling after Quill is initialized
    useEffect(() => {
      if (!quillRef.current) return;
      
      const editor = quillRef.current.getEditor();
      if (!editor) return;
      
      const handleImageClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName !== 'IMG') return;
        
        const img = target as HTMLImageElement;
        
        // Add selected class to the image
        const allImages = document.querySelectorAll('.ql-editor img');
        allImages.forEach(i => {
          if (i !== img) {
            i.classList.remove('selected-image');
          }
        });
        img.classList.add('selected-image');
        
        // Create toolbar if it doesn't exist
        let toolbar = document.querySelector('.image-edit-toolbar');
        if (!toolbar) {
          toolbar = document.createElement('div');
          toolbar.className = 'image-edit-toolbar';
          document.body.appendChild(toolbar);
        }
        
        // Position toolbar near the image
        const rect = img.getBoundingClientRect();
        toolbar.setAttribute('style', `
          position: absolute;
          top: ${window.scrollY + rect.top - 40}px;
          left: ${window.scrollX + rect.left}px;
          background: white;
          border: 1px solid #ccc;
          border-radius: 3px;
          display: flex;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        `);
        
        // Clear existing toolbar
        toolbar.innerHTML = '';
        
        // Add alt text button
        const altButton = document.createElement('button');
        altButton.innerHTML = 'Alt Text';
        altButton.className = 'image-toolbar-btn';
        altButton.onclick = (e) => {
          e.stopPropagation();
          const currentAlt = img.getAttribute('alt') || '';
          const newAlt = prompt('Enter alt text for this image:', currentAlt);
          if (newAlt !== null) {
            img.setAttribute('alt', newAlt);
          }
        };
        
        // Add caption button
        const captionButton = document.createElement('button');
        captionButton.innerHTML = 'Caption';
        captionButton.className = 'image-toolbar-btn';
        captionButton.onclick = (e) => {
          e.stopPropagation();
          
          // Find existing caption
          let caption = img.nextElementSibling;
          if (caption && caption.classList.contains('image-caption')) {
            const currentCaption = caption.textContent;
            const newCaption = prompt('Enter caption for this image:', currentCaption);
            
            if (newCaption === null) return; // User cancelled
            
            if (newCaption === '') {
              // Remove caption if empty
              caption.parentNode?.removeChild(caption);
            } else {
              caption.textContent = newCaption;
            }
          } else {
            // Create new caption
            const newCaption = prompt('Enter caption for this image:');
            if (newCaption === null || newCaption === '') return;
            
            caption = document.createElement('figcaption');
            caption.className = 'image-caption';
            caption.textContent = newCaption;
            
            // Insert after image
            img.insertAdjacentElement('afterend', caption);
          }
        };
        
        // Add resize controls
        const sizeButton = document.createElement('button');
        sizeButton.innerHTML = 'Resize';
        sizeButton.className = 'image-toolbar-btn';
        sizeButton.onclick = (e) => {
          e.stopPropagation();
          
          // Get current size
          const currentWidth = img.width;
          const currentHeight = img.height;
          
          // Ask for new width
          const newWidth = prompt('Enter new width in pixels:', currentWidth.toString());
          if (newWidth === null) return;
          
          // Calculate proportional height
          const ratio = currentHeight / currentWidth;
          const width = parseInt(newWidth);
          const height = Math.round(width * ratio);
          
          // Apply new size
          img.width = width;
          img.height = height;
          img.setAttribute('width', width.toString());
          img.setAttribute('height', height.toString());
        };
        
        // Add buttons to toolbar
        toolbar.appendChild(altButton);
        toolbar.appendChild(captionButton);
        toolbar.appendChild(sizeButton);
        
        // Remove toolbar when clicking elsewhere
        const handleDocumentClick = (e: MouseEvent) => {
          if (e.target !== img && !toolbar.contains(e.target as Node)) {
            toolbar.remove();
            img.classList.remove('selected-image');
            document.removeEventListener('click', handleDocumentClick);
          }
        };
        
        // Add event listener with delay to prevent immediate removal
        setTimeout(() => {
          document.addEventListener('click', handleDocumentClick);
        }, 100);
      };
      
      // Add click event listener to editor
      const editorElement = editor.root;
      editorElement.addEventListener('click', handleImageClick);
      
      // Cleanup
      return () => {
        editorElement.removeEventListener('click', handleImageClick);
        const toolbar = document.querySelector('.image-edit-toolbar');
        if (toolbar) toolbar.remove();
      };
    }, [quillRef.current]);

    // Default modules with clipboard settings to reduce warnings
    const defaultModules = {
      clipboard: {
        matchVisual: false
      },
      ...modules
    };

    return (
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={onChange}
        modules={defaultModules}
        preserveWhitespace
        {...rest}
      />
    );
  }
);

CustomQuillEditor.displayName = 'CustomQuillEditor';

export default CustomQuillEditor; 