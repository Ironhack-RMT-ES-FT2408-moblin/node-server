const libro1 = {
  title: "El señor de los anillos",
  author: "Tolkien"
}

const libro2 = {
  title: "Dune",
  author: "Frank Herbert"
}

console.log("log desde data.js")

// export default libro1
// module.exports = libro1
// module.exports = libro2

// module.exports = [libro1, libro2]
module.exports = {
  libro1,
  libro2
}
