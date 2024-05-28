

const ProjectPage = ({
    params
}: {
    params: {
        projectName: string;
    }
}) => {


    return (
        <div>
            {params.projectName}
        </div>
    )
}

export default ProjectPage;