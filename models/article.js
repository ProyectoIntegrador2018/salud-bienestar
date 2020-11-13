const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },

    summary: {
        type: String,
        required: true,
        unique: true
    },

    text: {
        type: String,
        required: true,
        unique: true,
    },

    category: {
        type: String
    }
});

const articleModel = mongoose.model('articles', articleSchema);

const Articles = {
    createArticle : function( newArticle ){
        return articleModel
                .create( newArticle )
                .then( article => {
                    return article;
                })
                .catch( err => {
                    throw new Error( err.message );
                });
    },

    getArticleByID : function( _id ){
        return articleModel
                .find( { _id })
                .then( articles => {
                    return articles;
                })
                .catch( err => {
                    throw new Error( err.message );
                });
    },

    getArticleByCategory : function( category ){
        return articleModel
                .find({ category })
                .then( articles => {
                    return articles
                })
                .catch( err => {
                    throw new Error( err.message );
                });
    }
}

module.exports = { Articles };