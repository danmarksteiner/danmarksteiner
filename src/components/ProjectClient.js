import React from 'react';

const ProjectClient = ({ clientArray, clientId }) => {
  const matchedClient = clientArray.Entry.filter(
    currentClient => currentClient.sys.id === clientId
  );
  const matchedClientName = matchedClient[0].fields.clientName;
  return <h2>Client - {matchedClientName}</h2>;
};
export default ProjectClient;
