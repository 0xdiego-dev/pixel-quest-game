function MissionCard ({nombre, descripcion, emoji}) {
    return (
        <div className="mission-card">
            <h3>{emoji} {nombre}</h3>
            <p>Descripción: {descripcion}</p>
        </div>

    );
}

export default MissionCard