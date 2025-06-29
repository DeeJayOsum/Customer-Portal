import React, { useState } from 'react';
import Popup from '../../components/Spinner/Spinner';

const Documents = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [open, setOpen] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);


    setFiles(prev => [...prev, ...selectedFiles]);

    const newPreviews = selectedFiles.map(file => {
      const fileURL = URL.createObjectURL(file);

      return {
        name: file.name,
        type: file.type,
        size: file.size,
        url: fileURL
      };
    });

    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (files.length === 0) {
      alert('Please upload at least one document.');
      return;
    }

    // Submit files (you would normally send to server here)
    console.log('Submitting files:', files);

    alert('Files submitted!');
  };

  const handleClear = () => {
    setFiles([]);
    setPreviews([]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2>Upload Required Documents</h2>

      <button onClick={() => setOpen(true)}>Show Upload Instructions</button>
      <Popup isOpen={open} onClose={() => setOpen(false)}>
        <p>Please upload documents such as:</p>
        <ul>
          <li>Proof of identity (e.g., driver's license, ID card)</li>
          <li>Proof of income (e.g., pay stub, tax return)</li>
          <li>Proof of residence (e.g., utility bill)</li>
        </ul>
      </Popup>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          style={{ marginTop: '10px' }}
        />

        {previews.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h4>Uploaded Files:</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {previews.map((file, index) => (
                <li key={index} style={{ marginBottom: '15px' }}>
                  <strong>{file.name}</strong> ({Math.round(file.size / 1024)} KB)
                  <div style={{ marginTop: '5px' }}>
                    {file.type.startsWith('image/') ? (
                      <img src={file.url} alt={file.name} style={{ width: '100%', maxWidth: '300px', borderRadius: '4px' }} />
                    ) : file.type === 'application/pdf' ? (
                      <a href={file.url} target="_blank" rel="noopener noreferrer" style={{ color: '#0072CE' }}>
                        View PDF
                      </a>
                    ) : (
                      <span>Unsupported file type</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" onClick={handleClear} style={{ marginTop: '10px' }}>
              Clear Files
            </button>
          </div>
        )}

        {previews?.length > 0 && <button
          type="submit"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#0072CE',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Submit Documents
        </button>}
      </form>
    </div>
  );
};

export default Documents;
