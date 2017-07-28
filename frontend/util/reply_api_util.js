export const fetchAllReplies = () => (
  $.ajax({
    method: 'GET',
    url: '/api/replies'
  })
);

export const fetchAReply = id => (
  $.ajax({
    method: 'GET',
    url: `/api/replies/${id}`
  })
);


export const addReply = (reply) => {
  return $.ajax({
    type: 'POST',
    url: `/api/replies`,
    data: {reply}
  });
};

export const deleteReply = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/replies/${id}`
  });
};
