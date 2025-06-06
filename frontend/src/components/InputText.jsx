const InputText = ({ name, label, placeholder, type = "text", register, error }) => {
  return (
    <div className="sm:col-span-3 m:col-span-6">
      <label
        htmlFor={name}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          {...register(name)}
          className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${
            error ? "outline-red-500 focus:outline-red-500" : ""
          }`}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
};

export default InputText;
