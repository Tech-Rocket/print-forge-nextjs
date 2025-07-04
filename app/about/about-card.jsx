export default function AboutCard(props) {
  return (
    <div className="text-slate-800">
      <div className="flex items-center gap-3">
        {props.icon}
        <h1 className="text-2xl font-bold">{props.title}</h1>
      </div>
      <p className="mt-3">{props.description}</p>
    </div>
  );
}
