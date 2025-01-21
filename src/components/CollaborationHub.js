import React from 'react';

const CollaborationHub = () => {
    const projects = [
        { id: 1, title: 'Project A', description: 'Description for Project A', rolesNeeded: 'Developer, Designer' },
        { id: 2, title: 'Project B', description: 'Description for Project B', rolesNeeded: 'Project Manager' },
    ];

    return (
        <div>
            <h2>Collaboration Hub</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Roles Needed: {project.rolesNeeded}</p>
                        <button>Apply</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollaborationHub;