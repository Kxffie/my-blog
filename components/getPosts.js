const glob = require('glob')
const matter = require('gray-matter')

const getPosts = () => {
	const posts = glob
		.sync('posts/**/*.md')
		.map((filename) => {
			const content = require(`./${filename}`)
			const { data } = matter(content)
			return {
				...data,
				filename,
			}
		})
		.sort((a, b) => new Date(b.date) - new Date(a.date))

	return posts
}

module.exports = getPosts
