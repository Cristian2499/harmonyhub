"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from api.models import db, User, Gender, Country, MusicGender, UserMusicGender, MusicRole, UserMusicRole, Song, TrackLikes
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/register', methods=['POST'])
def register_new_user():
    try: 
        body = request.json
        email = body.get("email", None)
        password = body.get("password", None)
        name = body.get("name", None)
        lastname = body.get("lastname", None)
        nickname = body.get("nickname", None)
        gender = body.get("gender", None)
        country = body.get("country", None)
        if email is None or password is None or name is None or lastname is None or nickname is None or gender is None or country is None:
            return jsonify({"error": "all the fields must be completed"}), 400
        
        email_is_taken = User.query.filter_by(email=email).first() 
        if email_is_taken:
            return jsonify({"error": "Email already exist"}), 400
        
        password_hash = generate_password_hash(password)
        print(password_hash, len(password_hash))
        user = User(email=email, password=password_hash, name=name, lastname=lastname, nickname=nickname,gender=Gender(gender), country=Country(country), is_active=True )
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg": f"{nickname} created!"}), 201
        

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500
    

@api.route("/musicgender", methods=["POST"])
def create_music_gender():
    try:
        body = request.json
        name = body.get("name", None)
        if name is None:
            return jsonify({"error": "name is required"}), 400

        music_gender = MusicGender(name=name)

        db.session.add(music_gender)
        db.session.commit()
        db.session.refresh(music_gender)

        return jsonify({"message": f"{name} created!"}), 201

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500

@api.route("/user/musicgender/<int:music_gender_id>", methods=["POST"])
@jwt_required()
def create_user_music_gender(music_gender_id):
    try: 
        user_data = get_jwt_identity()
        music_gender_is_taken = UserMusicGender.query.filter_by(user_id = user_data["id"], music_gender_id = music_gender_id).first()
        if music_gender_is_taken:
            return jsonify({"error": "Music gender already exist"}), 400
        
        user_music_gender = UserMusicGender(user_id = user_data["id"], music_gender_id = music_gender_id)
        db.session.add(user_music_gender)
        db.session.commit()
        db.session.refresh(user_music_gender)
        return jsonify({"msg": f"{music_gender_id} created!"}), 201

    except Exception as error:
        return jsonify({"error": f"{error}"}),500
    
@api.route("/musicrole", methods=["POST"])
def create_music_role():
    try:
        body = request.json
        name = body.get("name", None)
        if name is None:
            return jsonify({"error": "name is required"}), 400
        
        music_role = MusicRole(name=name)

        db.session.add(music_role)
        db.session.commit()
        db.session.refresh(music_role)

        return jsonify({"message": f"{name} created!"}), 201
    
    except Exception as error:
        return jsonify({"error": f"{error}"}), 500
    
@api.route("/user/musicrole/<int:music_role_id>", methods=["POST"])
@jwt_required()
def create_user_music_role(music_role_id):
    try:
        user_data = get_jwt_identity()
        music_role_is_taken = UserMusicRole.query.filter_by(user_id = user_data["id"], music_role_id = music_role_id).first()
        if music_role_is_taken:
            return jsonify({"error": "Music role already exits"}), 400
        
        user_music_role = UserMusicRole(user_id = user_data["id"], music_role_id = music_role_id)
        db.session.add(user_music_role)
        db.session.commit()
        db.session.refresh(user_music_role)
        return jsonify({"msg": f"{music_role_id} created!"}), 201

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
        print(user)
        print(email)
        if user is None:
            return jsonify({"error": "Email or password wrong"}), 404
        
        if not check_password_hash(user.password, password):
            return jsonify({"error": "Email or password wrong"}), 400


        auth_token = create_access_token({"id": user.id, "email": user.email})
        return jsonify({"token": auth_token}), 200

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500

#obtener cancines (sirve),crear canciones(sirve),borrar cancion (sirve), editar
@api.route("/song/<int:id>", methods=["GET"])
def get_song_by_id(id):
    try:
        song = Song.query.get(id)
        return jsonify({"song": song.serialize()})

    except Exception as error:
        return jsonify({"error": f"{error}"}),500

@api.route("/song", methods=["POST"])
@jwt_required()
def create_song():
    try:
        body = request.json
        user_data = get_jwt_identity()
        name = body.get("name", None)
        description = body.get("description", None)
        if name is None or description is None:
            return jsonify({"error": "all the fields must be completed"}), 400
        
        song = Song(user_id=user_data["id"], name=name, description=description)

        db.session.add(song)
        db.session.commit()
        db.session.refresh(song)

        return jsonify({"msg": f"{name} created!"}), 201

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500
    
@api.route("/song/<int:song_id>", methods=["DELETE"])
@jwt_required()
def delete_song(song_id):
    try:
        user_data = get_jwt_identity()
        song = Song.query.filter_by(user_id=user_data["id"]).filter_by(id=song_id).first()
        if song is None:
            return jsonify({"error": "song not found"}), 404
        
        db.session.delete(song)
        db.session.commit()

        return jsonify({"msg": "song delete"}), 200

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500
    
#agregar likes (sirve)y borrarlos (50%)
@api.route("/like/song/<int:song_id>", methods=["POST"])
@jwt_required()
def create_like_song(song_id):
    try:
        body = request.json
        user_data = get_jwt_identity()
        song_exist = Song.query.get(song_id)
        if song_exist is None:
            return jsonify({"error": f"song not found"}), 404

        like_song = TrackLikes(user_id=user_data["id"], song_id=song_id)

        db.session.add(like_song)
        db.session.commit()
        db.session.refresh(like_song)

        return jsonify({"like_song": like_song.serialize()}), 201

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500

@api.route("/like/song/<int:song_id>", methods=["DELETE"])
@jwt_required()
def delete_like_song(song_id):
    try:
        user_data = get_jwt_identity()
        song = TrackLikes.query.filter_by(song_id=song_id, user_id=user_data["id"])
        if song is None:
            return jsonify({"error": "song not found"}), 404
    
        db.session.delete(song)
        db.session.commit()

        return jsonify({"msg": "song delete"}), 200
    
    except Exception as error:
        return jsonify({"error": f"{error}"}), 500
