
import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: 'fas fa-heart',
      count: '2652',
      label: 'Happy Patients',
      color: 'text-blue-600'
    },
    {
      icon: 'fas fa-bed',
      count: '118',
      label: 'Hospital Rooms',
      color: 'text-blue-600'
    },
    {
      icon: 'fas fa-award',
      count: '266',
      label: 'Awards Won',
      color: 'text-blue-600'
    },
    {
      icon: 'fas fa-ambulance',
      count: '12',
      label: 'Ambulances',
      color: 'text-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 ${stat.color} bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`${stat.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
