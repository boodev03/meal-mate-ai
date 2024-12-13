interface FormSubmitButtonProps {
  isSubmitting: boolean;
}

export function FormSubmitButton({ isSubmitting }: FormSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`
        w-full flex items-center justify-center px-6 py-3 border border-transparent 
        rounded-lg shadow-sm text-base font-medium text-white 
        bg-gradient-to-r from-blue-600 to-blue-700
        hover:from-blue-700 hover:to-blue-800 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
        transition-all duration-300
        ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}
      `}
    >
      {isSubmitting ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Calculating...
        </>
      ) : (
        <>
          <span>Calculate Nutrition Goals</span>
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </>
      )}
    </button>
  );
}
