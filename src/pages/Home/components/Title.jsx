function Title({ children, className = "" }) {
  return (
    <h2
      class={`text-[2.074rem] font-bold mb-8 text-[#60a5fa] text-center tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export default Title;
