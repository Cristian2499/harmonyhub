"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from api.models import db, User, Gender, Role, Country
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/register', methods=['POST'])
def regsiter_new_user():
    try: 
        body = request.json
        email = body.get("email", None)
        password = body.get("password", None)
        name = body.get("name", None)
        lastname = body.get("lastname", None)
        nickname = body.get("nickname", None)
        gender = body.get("gender", None)
        role = body.get("role", None)
        country = body.get("country", None)
        if email is None or password is None or name is None or lastname is None or nickname is None or gender is None or role is None or country is None:
            return jsonify({"error": "all the fields must be completed"}), 400
        
        email_is_taken = User.query.filter_by(email=email).first()
        if email_is_taken:
            return jsonify({"error": "Email already exist"}), 400
        
        password_hash = generate_password_hash(password)
        print(password_hash, len(password_hash))
        user = User(email=email, password=password_hash, name=name, lastname=lastname, nickname=nickname,gender=Gender(gender), role=Role(role), country=Country(country), is_active=True )
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg": f"{nickname} created!"}), 201
        

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500
    

@api.route("/me", methods=["GET"])
@jwt_required()
def get_user_data():
    user_data = get_jwt_identity()
    user_info = User.query.get(user_data["id"])
    return jsonify(user_info.serialize()), 200


@api.route("/login", methods=["POST"])
def login():
    try:
        body = request.json
        email = body.get("email", None)
        password = body.get("password", None)
        if email is None or password is None:
            return jsonify({"error": "password and email required"}), 400
        
        user = User.query.filter_by(email=email).first()
        if user is None:
            return jsonify({"error": "Email or password wrong"}), 404
        
        if not check_password_hash(user.password, password):
            return jsonify({"error": "Email or password wrong"}), 400


        auth_token = create_access_token({"id": user.id, "email": user.email})
        return jsonify({"token": auth_token}), 500

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500