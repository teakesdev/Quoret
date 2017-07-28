export const fetchAllComments = () => (
  $.ajax({
    method: 'GET',
    url: '/api/comments'
  })
);


export const fetchComment = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`
  })
);

export const updateComment = (comment) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    dataType: 'json',
    data: { comment }
  })
);



export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `/api/comments/`,
    data: { comment }
  })
);
