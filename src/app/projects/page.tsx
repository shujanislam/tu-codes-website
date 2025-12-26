import { fetchProjects } from '../../../lib/queries';
import CreateProjectCard from '../../components/projects';

export default async function ProjectsPage() {
    const res = await fetchProjects();
    console.log(res);
    return (
    <>
      <CreateProjectCard />
    </>
    );
}
