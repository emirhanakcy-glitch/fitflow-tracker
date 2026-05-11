import React, { useState } from 'react';
import WorkoutList from './components/WorkoutList';
import WorkoutForm from './components/WorkoutForm';

function App() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Sabah Koşusu', duration: '30', level: 'Orta' },
    { id: 2, name: 'Yoga & Esneme', duration: '20', level: 'Kolay' },
  ]);
  const [editingWorkout, setEditingWorkout] = useState(null);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, { ...workout, id: Date.now() }]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  const updateWorkout = (updated) => {
    setWorkouts(workouts.map(w => w.id === updated.id ? updated : w));
    setEditingWorkout(null);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F7F8FA', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#27AE60', padding: '20px 0', marginBottom: '32px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
            💪 FitFlow Tracker
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', margin: '4px 0 0', fontSize: '14px' }}>
            Antrenmanlarını takip et
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 20px' }}>
        <WorkoutForm
          onAdd={addWorkout}
          onUpdate={updateWorkout}
          editingWorkout={editingWorkout}
          setEditingWorkout={setEditingWorkout}
        />
        <WorkoutList
          workouts={workouts}
          onDelete={deleteWorkout}
          onEdit={setEditingWorkout}
        />
      </div>
    </div>
  );
}

export default App;