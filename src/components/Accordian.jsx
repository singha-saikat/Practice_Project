import Pannel from "./Pannel";

export default function Accordian() {
    
  return (
    <div>
      <h2 className="text-2xl font-semibold">Here are my all courses</h2>
      <Pannel title="Web develpment course-1">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        autem eum consequatur exercitationem maiores at quidem quisquam soluta,
        facere corporis.
      </Pannel>
      <Pannel title="Web develpment course-1">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est
        doloribus quasi itaque accusamus voluptatem illum consequatur maiores,
        debitis nostrum!
      </Pannel>
    </div>
  );
}
