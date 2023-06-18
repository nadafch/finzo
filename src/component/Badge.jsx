function Badge(props) {
  const { label } = props;

  return (
    <div className="w-fit bg-frosty-dawn/30 text-gulf-harbour-500 px-4 py-2 rounded-2xl font-semibold">
      {label}
    </div>
  );
}

export default Badge;
