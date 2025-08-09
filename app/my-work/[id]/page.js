import { WorkData } from "@/app/myworks/workdata";

const SingleWorkPage = ({ params }) => {
  const project = WorkData.find((p) => p.slug === params.id);

  if (!project) {
    return (
      <div className="mt-20 text-center text-red-600 font-semibold">
        Project not found.
      </div>
    );
  }

  return (
    <section className="my-56 max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-96 object-cover rounded mb-6"
      />
      <p className="mb-6">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mb-8 block"
      >
        Visit Project
      </a>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: project.singleInforMation.fullDescription,
        }}
      />
    </section>
  );
};

export default SingleWorkPage;
