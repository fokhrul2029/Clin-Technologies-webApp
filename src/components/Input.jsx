function Input({ type, placeholder, children, id }) {
  return (
    <div>
      <label for={id || type} class="block text-sm font-medium text-gray-700">
        {children}
      </label>
      <div class="mt-1">
        <input
          id={id || type}
          type={type}
          autocomplete={type}
          placeholder={placeholder}
          name={type}
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black dark:text-white"
        />
      </div>
    </div>
  );
}

export default Input;
