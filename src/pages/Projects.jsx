import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import projectData from '../api/project.json';
import '../style/Projects.css';

// ✅ React Icons
import { 
  FaImage, 
  FaFileAlt, 
  FaFilePowerpoint, 
  FaExclamationTriangle,
  FaGithub
} from 'react-icons/fa';

// 🔗 Open GitHub Repository
const handleGitHub = (githubUrl) => {
  if (!githubUrl || githubUrl.trim() === '') {
    Swal.fire({
      title: 'GitHub Link Not Available',
      text: 'This project does not have a GitHub repository.',
      icon: 'info',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'swal-custom-popup',
        title: 'swal-title-dark',
        htmlContainer: 'swal-text-dark',
        confirmButton: 'swal-confirm-dark'
      }
    });
    return;
  }

  window.open(githubUrl, '_blank', 'noopener,noreferrer');
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProjects(projectData.projects);
      setLoading(false);
    }, 500);
  }, []);

  // 🔍 Image preview using SweetAlert
  const handleImageClick = (image, title, event) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (!image || image.trim() === '') {
      Swal.fire({
        title: 'Image Not Available',
        text: 'This project does not have an image',
        icon: 'info',
        customClass: {
          popup: 'swal-custom-popup',
          title: 'swal-title-dark',
          htmlContainer: 'swal-text-dark',
          confirmButton: 'swal-confirm-dark'
        }
      });
      return;
    }

    Swal.fire({
      title: title,
      html: `
        <div style="margin-top: 20px;">
          <img src="${image}" alt="${title}" style="max-width: 100%; max-height: 400px; border-radius: 8px;" />
          <p style="margin-top: 15px; color: #e5e7eb;">Click outside or press ESC to close</p>
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: '90%',
      backdrop: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
      customClass: {
        popup: 'swal-custom-popup',
        closeButton: 'swal-custom-close',
        title: 'swal-title-dark'
      }
    });
  };

  // 📄 Open documentation or PPT
  const handleViewFile = (fileUrl, label) => {
    if (!fileUrl || fileUrl.trim() === '') {
      Swal.fire({
        title: `${label} Not Available`,
        text: `This ${label.toLowerCase()} file is not uploaded.`,
        icon: 'warning',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'swal-custom-popup',
          title: 'swal-title-dark',
          htmlContainer: 'swal-text-dark',
          confirmButton: 'swal-confirm-dark'
        }
      });
      return;
    }

    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  // 🌙 Dark Theme SweetAlert Styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .swal-custom-popup {
        background: #0f172a !important;
        border: 1px solid #334155 !important;
        border-radius: 14px !important;
      }

      .swal-title-dark {
        color: #f8fafc !important;
        font-size: 22px !important;
      }

      .swal-text-dark {
        color: #e5e7eb !important;
        font-size: 15px !important;
      }

      .swal-confirm-dark {
        background-color: #2563eb !important;
        color: #ffffff !important;
        border-radius: 6px !important;
        padding: 8px 16px !important;
      }

      .swal-custom-close {
        color: #ffffff !important;
        font-size: 26px !important;
      }

      .swal-custom-close:hover {
        color: #f87171 !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="section">
      <h1 className="section-heading">My Projects</h1>

      {/* Alert */}
      {projects.length === 0 && !loading && showAlert && (
        <div className="alert-notification">
          <div className="alert-icon">
            <FaExclamationTriangle size={26} />
          </div>
          <div className="alert-content">
            <h3>No Projects Found</h3>
            <p>Currently there are no projects to display. Check back later!</p>
          </div>
          <button className="alert-close" onClick={() => setShowAlert(false)}>
            &times;
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading projects...</p>
        </div>
      )}

      {/* Projects */}
      {!loading && projects.length > 0 && (
        <div className="projects-container">
          {projects.map((p, index) => (
            <div key={p.project_id} className="project-card" data-index={`0${index + 1}`}>
              <div className="project-image-container">
                <img
                  src={p.image}
                  alt={p.project_name}
                  loading="lazy"
                  onClick={(e) => handleImageClick(p.image, p.project_name, e)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <h3>{p.project_name}</h3>
                <p>{p.description}</p>

                <div className="project-tech">
                  {p.technology.split(',').map((tech, i) => (
                    <span key={i}>{tech.trim()}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  {/* <button
                    onClick={(e) => handleImageClick(p.image, p.project_name, e)}
                    className="project-button preview-btn"
                  >
                    <FaImage /> Preview
                  </button> */}

                  <button
                    onClick={() => handleViewFile(p.documentation, 'Documentation')}
                    className="project-button docs-btn"
                  >
                    <FaFileAlt /> Docs
                  </button>

                  <button
                    onClick={() => handleViewFile(p.ppt, 'Presentation')}
                    className="project-button ppt-btn"
                  >
                    <FaFilePowerpoint /> PPT
                  </button>

                  <button
                    onClick={() => handleGitHub(p.github)}
                    className="project-button github-btn"
                  >
                    <FaGithub /> GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;