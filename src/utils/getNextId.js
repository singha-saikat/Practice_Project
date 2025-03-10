export  const getNextId = (data) => {
    const maxId = data.reduce((prev,cur) => Math.max(prev,cur.id),0);
    return maxId + 1;
}