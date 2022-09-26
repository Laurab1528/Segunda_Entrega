
const {db} = require('../config/dbfirebase.js');
const { CarritosModel } = require( '../modules/carritos.modules.js');
const pkg = require('firebase-admin');
const {admin} = pkg;


class CarritoDao {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(db),
            databaseURL: 'https://produc-e88ab.firebaseio.com'
        })
    }

    ID_FIELD = "_id";
    
    async createCart() {
        const db = admin.firestore()
        const query = db.collection('productos')
        let time = new Date()
        try {
            const doc = query.doc()
            const carrito = await doc.create({
                timestamp: time.toString(),
                productos: []})
            return await CarritosModel.create({});
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async deleteCartById(id) {
        try {
            const db = admin.firestore()
            const query = db.collection('productos')
            const doc = query.doc(String(id))
            return await CarritosModel.findByIdAndDelete({[this.ID_FIELD]: id})
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    // 6254bf5bdb4015399b45c35f
    async saveProductToCart(id, obj) {
        try {
            const db = admin.firestore()
            const query = db.collection('productos')
            const doc = query.doc(String(id))
            const cart = await CarritosModel.findById(id)
            cart.products.push(obj.productId);
            cart.save();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async deleteProductFromCart(id, productId) {
        try {
            const db = admin.firestore()
            const query = db.collection('productos')
            const doc = query.doc(String(id))
            const cart = await CarritosModel.findById(id);
            cart.products.remove(productId);
            cart.save();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async getAllProductsFromCart(id) {
        try {
            const db = admin.firestore()
            const query = db.collection('productos')
            const doc = query.doc(String(id))
            return await CarritosModel.findById(id).populate('productos').select({productos: 1, _id:0});
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = CarritoDao;