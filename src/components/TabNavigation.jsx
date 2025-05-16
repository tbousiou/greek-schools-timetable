import React from 'react';

export default function TabNavigation({ activeTab, onTabChange, tabs }) {
  return (
    <div className="flex border-b border-gray-300 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === tab.id
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:border-b-2'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}