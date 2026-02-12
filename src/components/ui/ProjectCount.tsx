import { fetchProjectsCount } from '../../../lib/queries';

export default async function ProjectCount(){
  const projectsCount = await fetchProjectsCount();
  return(
    <>
      <div className="text-4xl font-bold text-green-600 mb-2">{ projectsCount }</div>
    </>
  );
}
