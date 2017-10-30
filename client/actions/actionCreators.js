// increments
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add a comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// remove a comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}