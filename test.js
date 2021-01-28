const {quastionModule,quizModule}= require('./schema');

/**
 * Stores a new product into the database.
 * @param {Object} product product object to create.
 * @throws {Error} If the product is not provided.
 */
module.exports.create = async (quastion) => {
    if (!quastion)
        throw new Error('Missing quastion');

    await quastionModule.create(quastion);
}

module.exports.create = async (quiz) => {
    if (!quiz)
        throw new Error('Missing quiz');
    await quizModule.create(product);
}