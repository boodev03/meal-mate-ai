import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
      <p className="mt-4 text-gray-600">Analyzing image...</p>
    </div>
  );
}