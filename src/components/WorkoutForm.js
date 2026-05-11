import React, { useState, useEffect } from 'react';

function WorkoutForm({ onAdd, onUpdate, editingWorkout, setEditingWorkout }) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState('Kolay');

  useEffect(() => {
    if (editingWorkout) {
      setName(editingWorkout.name);
      setDuration(editingWorkout.duration);
      setLevel(editingWorkout.level);
    } else {
      setName(''); setDuration(''); setLevel('Kolay');
    }
  }, [editingWorkout]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !duration) return;
    if (editingWorkout) {
      onUpdate({ ...editingWorkout, name, duration, level });
    } else {
      onAdd({ name, duration, level });
    }
    setName(''); setDuration(''); setLevel('Kolay');
  };

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: '10px',
    border: '1.5px solid #E0E2E6', fontSize: '14px',
    outline: 'none', boxSizing: 'border-box', background: '#F7F8FA'
  };

  const labelStyle = { fontSize: '13px', fontWeight: '500', color: '#555', marginBottom: '6px', display: 'block' };

  return (
    <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
      <h2 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '20px', color: '#1A1A1E' }}>
        {editingWorkout ? '✏️ Antrenmanı Düzenle' : '➕ Yeni Antrenman Ekle'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '14px' }}>
          <label style={labelStyle}>Antrenman Adı</label>
          <input style={inputStyle} value={name} onChange={e => setName(e.target.value)} placeholder="örn. Sabah Koşusu" />
        </div>
        <div style={{ marginBottom: '14px' }}>
          <label style={labelStyle}>Süre (dakika)</label>
          <input style={inputStyle} type="number" value={duration} onChange={e => setDuration(e.target.value)} placeholder="örn. 30" />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Seviye</label>
          <select style={inputStyle} value={level} onChange={e => setLevel(e.target.value)}>
            <option>Kolay</option>
            <option>Orta</option>
            <option>Zorlu</option>
          </select>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ flex: 1, background: '#27AE60', color: 'white', border: 'none', borderRadius: '12px', padding: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
            {editingWorkout ? 'Güncelle' : 'Ekle'}
          </button>
          {editingWorkout && (
            <button type="button" onClick={() => setEditingWorkout(null)} style={{ padding: '12px 20px', borderRadius: '12px', border: '1.5px solid #E0E2E6', background: 'white', cursor: 'pointer', fontSize: '14px' }}>
              İptal
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default WorkoutForm;