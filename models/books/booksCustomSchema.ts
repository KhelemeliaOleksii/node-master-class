import Joi from "joi"

const bookAddJoiSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    favorite: Joi.boolean(),
    genre: Joi.string().required(),
    isbn: Joi.string().required()
    // genre: Joi.string().allow("fantastic, love"),
    // isbn: Joi.string().pattern(/[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/),
})

const bookUpdateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

const ExternalShema = {
    add: bookAddJoiSchema,
    patchFavorite: bookUpdateFavoriteSchema,
}

export default ExternalShema;