import React from 'react';

const levelColors = {
  'Kolay': '#27AE60',
  'Orta': '#F59E42',
  'Zorlu': '#EA5353'
};

function WorkoutList({ workouts, onDelete, onEdit }) {
  if (workouts.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#9398A2' }}>
        <p style={{ fontSize: '32px' }}>🏃</p>
        <p>Henüz antrenman eklenmedi.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '16px', color: '#1A1A1E' }}>
        📋 Antrenman Listesi ({workouts.length})
      </h2>
      {workouts.map(workout => (
        <div key={workout.id} style={{ background: 'white', borderRadius: '16px', padding: '18px 20px', marginBottom: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EAF5EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
              💪
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '15px', color: '#1A1A1E' }}>{workout.name}</p>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#9398A2' }}>
                {workout.duration} dk &nbsp;•&nbsp;
                <span style={{ color: levelColors[workout.level], fontWeight: '500' }}>{workout.level}</span>
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => onEdit(workout)} style={{ padding: '8px 14px', borderRadius: '10px', border: '1.5px solid #E0E2E6', background: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}>
              ✏️ Düzenle
            </button>
            <button onClick={() => onDelete(workout.id)} style={{ padding: '8px 14px', borderRadius: '10px', border: 'none', background: '#FEE2E2', color: '#EA5353', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}>
              🗑️ Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkoutList;