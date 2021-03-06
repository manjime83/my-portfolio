import React from 'react';

export interface WorkItemProps {
  name: string,
  image: string
}

const WorkItem: React.FC<WorkItemProps> = (props: WorkItemProps) => {
  return (
    <div className="section__exampleWrapper">
      <div className="section__example">
        <img
          alt="example screenshot of a project involving cats"
          className="section__exampleImage"
          src={'images/' + props.image}
        />
        <dl className="color--cloud">
          <dt className="section__exampleTitle section__text--centered">{props.name}</dt>
          <dd></dd>
        </dl>
      </div>
    </div>
  );
};

export default WorkItem;
