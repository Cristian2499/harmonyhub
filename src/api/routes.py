"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from api.models import db, User, Gender, Country, MusicGender, UserMusicGender, MusicRole, UserMusicRole, Song, TrackLikes, Followers, Country
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
        user = User(email=email, password=password_hash, name=name, lastname=lastname,
                    nickname=nickname, gender=Gender(gender), country=Country(country), is_active=True)
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
        music_gender_is_taken = UserMusicGender.query.filter_by(
            user_id=user_data["id"], music_gender_id=music_gender_id).first()
        if music_gender_is_taken:
            return jsonify({"error": "Music gender already exist"}), 400

        user_music_gender = UserMusicGender(
            user_id=user_data["id"], music_gender_id=music_gender_id)
        db.session.add(user_music_gender)
        db.session.commit()
        db.session.refresh(user_music_gender)
        return jsonify({"msg": f"{music_gender_id} created!"}), 201

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500


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
        music_role_is_taken = UserMusicRole.query.filter_by(
            user_id=user_data["id"], music_role_id=music_role_id).first()
        if music_role_is_taken:
            return jsonify({"error": "Music role already exits"}), 400

        user_music_role = UserMusicRole(
            user_id=user_data["id"], music_role_id=music_role_id)
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
        if user is None or not check_password_hash(user.password, password):
            return jsonify({"error": "Email or password wrong"}), 400

        auth_token = create_access_token({"id": user.id, "email": user.email})

        # Incluir datos del usuario en la respuesta
        return jsonify({
            "token": auth_token,
            "user": {
                "id": user.id,
                "email": user.email,
                "name": user.name,
                "lastname": user.lastname,
                "nickname": user.nickname,
                "gender": user.gender.name,
                "country": user.country.name
            }
        }), 200

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500

# obtener cancines (sirve),crear canciones(sirve),borrar cancion (sirve)


@api.route("/song/<int:id>", methods=["GET"])
def get_song_by_id(id):
    try:
        song = Song.query.get(id)
        return jsonify({"song": song.serialize()})

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500


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

        song = Song(user_id=user_data["id"],
                    name=name, description=description)

        db.session.add(song)
        db.session.commit()
        db.session.refresh(song)

        return jsonify({"msg": f"{name} created!"}), 201

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500
    
@api.route("/user/<int:user_id>/songs", methods=["GET"])
def get_songs_by_user(user_id):
    try:
        user = User.query.get(user_id)
        if user is None:
            return jsonify({"error": "User not found"}), 404

        songs = Song.query.filter_by(user_id=user_id).all()
        return jsonify({"songs": [song.serialize() for song in songs]})

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500


@api.route("/song/<int:song_id>", methods=["DELETE"])
@jwt_required()
def delete_song(song_id):
    try:
        user_data = get_jwt_identity()
        song = Song.query.filter_by(
            user_id=user_data["id"]).filter_by(id=song_id).first()
        if song is None:
            return jsonify({"error": "song not found"}), 404

        db.session.delete(song)
        db.session.commit()

        return jsonify({"msg": "song delete"}), 200

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500

# agregar likes (sirve)y borrarlos (sirve)


@api.route("/like/song/<int:song_id>", methods=["POST"])
@jwt_required()
def create_like_song(song_id):
    try:
        body = request.json
        user_data = get_jwt_identity()
        song_like = TrackLikes.query.filter_by(
            user_id=user_data["id"], song_id=song_id).first()
        if song_like:
            return jsonify({"error": f"song already exist in your likes"}), 409
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
        song_like = TrackLikes.query.filter_by(
            user_id=user_data["id"], song_id=song_id).first()
        if song_like is None:
            return jsonify({"error": "song not found"}), 404

        db.session.delete(song_like)
        db.session.commit()

        return jsonify({"msg": "song like delete"}), 200

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500

# follow


@api.route("/follow/<int:user_to_id>", methods=["POST"])
@jwt_required()
def follow_user(user_to_id):
    try:
        user_data = get_jwt_identity()
        user_exist = User.query.get(user_to_id)
        if user_exist is None:
            return jsonify({"error": f"user not found"}), 404

        already_followed = Followers.query.filter_by(
            follower_id=user_data["id"], followed_id=user_to_id).first()
        if already_followed is not None:
            return jsonify({"error": f"user already followed"}), 400

        follow = Followers(follower_id=user_data["id"], followed_id=user_to_id)

        db.session.add(follow)
        db.session.commit()
        db.session.refresh(follow)

        return jsonify({"user followed": follow.serialize()}), 200

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500


@api.route("/unfollow/<int:user_to_id>", methods=["DELETE"])
@jwt_required()
def delete_follower(user_to_id):
    try:
        user_data = get_jwt_identity()
        user_exist = User.query.get(user_to_id)
        if user_exist is None:
            return jsonify({"error": f"user not found"}), 404

        followed_user = Followers.query.filter_by(
            follower_id=user_data["id"], followed_id=user_to_id).first()
        if followed_user is None:
            return jsonify({"msg": "user is not followed"}), 400

        db.session.delete(followed_user)
        db.session.commit()

        return jsonify({"msg": "user has been unfollowed"}), 200

    except Exception as error:
        return jsonify({"error": f"{error}"}), 500

# metodo get agregado por Luis

@api.route("/follow-status/<int:target_id>", methods=["GET"])
@jwt_required()
def follow_status(target_id):
    try:
        follower_data = get_jwt_identity()
        follower_id = follower_data.get("id")

        if follower_id is None:
            return jsonify({"error": "Invalid follower identity"}), 404

        followed_user = User.query.get(target_id)
        if followed_user is None:
            return jsonify({"error": "User not found"}), 404

        status = Followers.query.filter_by(follower_id=follower_id, followed_id=target_id).first() is not None
        return jsonify({"follow_status": status})

    except Exception as error:
        print(f"Error occurred: {error}")
        return jsonify({"error": f"Internal server error: {error}"}), 500
    

@api.route("/follower-count/<int:user_id>", methods=["GET"])
@jwt_required()
def get_follower_count(user_id):
    try:
        user=User.query.get(user_id)
        if user is None:
            return jsonify({"error":"User not found"}), 404
        follower_count=Followers.query.filter_by(followed_id=user.id).count()

        return jsonify({"follower_count":follower_count}), 200
    except Exception as error:
        print(f"Error occurred: {error}")
        return jsonify({"error": f"Internal server error: {error}"}), 500
    

# Agregado por Cristobal Busqueda por ID
@api.route('/users/<int:user_id>', methods=['GET'])
def get_user_by_id(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({
        'id': user.id,
        'email': user.email,
        'name': user.name,
        'lastname': user.lastname,
        'nickname': user.nickname,
        'gender': user.gender.name,
        'country': user.country.name,
        'description': user.description,
        'music_genders': [music_gender.music_gender.name for music_gender in user.music_genders],
        'music_roles': [music_role.music_role.name for music_role in user.music_roles],
        'songs': [song.name for song in user.songs],
        'likes': [like.track.title for like in user.likes]
    })

# Agregado por Cristobal Busqueda a todos los Usuarios


@api.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    return jsonify([{
        'id': user.id,
        'email': user.email,
        'name': user.name,
        'lastname': user.lastname,
        'nickname': user.nickname,
        'gender': user.gender.name,
        'country': user.country.name,
        'description': user.description,
        'music_genders': [music_gender.music_gender.name for music_gender in user.music_genders],
        'music_roles': [music_role.music_role.name for music_role in user.music_roles],
        'songs': [song.name for song in user.songs],
        'likes': [like.track.title for like in user.likes]
    } for user in users])


@api.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({'error': 'User not found'}), 404

    data = request.get_json()
    if 'name' in data:
        user.name = data['name']
    if 'lastname' in data:
        user.lastname = data['lastname']
    if 'nickname' in data:
        user.nickname = data['nickname']
    if 'country' in data:
        user.country = data['country']
    if 'description' in data:
        user.description = data['description']

    db.session.commit()
    return jsonify(user.serialize())


@api.route('/songs', methods=['GET'])
def get_all_songs():
    songs = Song.query.all()
    return jsonify([{
        "id": song.id,
        "user_id": song.user_id,
        "name": song.name,
        "description": song.description,
        "likes": song.likes
    }for song in songs])


# de aqui para abajo ayudo alexis para el search

@api.route('/music_gender', methods=['GET'])
def get_all_music_genders():
    music_gender = MusicGender.query.all()
    if len(music_gender) < 1:
        return jsonify({"error": "music genders not found"}), 404
    return jsonify([item.serialize() for item in music_gender]), 200


@api.route('/music_role', methods=['GET'])
def get_all_music_roles():
    music_role = MusicRole.query.all()
    if len(music_role) < 1:
        return jsonify({"error": "music role not found"}), 404
    return jsonify([item.serialize() for item in music_role]), 200


@api.route('/country', methods=['GET'])
def get_all_countrys():
    return jsonify([item.value for item in Country]), 200


@api.route("/users/filter", methods=["POST"])
def get_all_users_by_filter():
    body = request.json
    users_list = []
    users_c_list=[]
    users_r_list=[]
    users_g_list=[]
    if "city" in body: 
        if body["city"] != "default":
            country_enum = next((c for c in Country if c.value == body["city"]), None)
            users = User.query.filter_by(country=country_enum).all()
            if len(users) >= 1:
                users_c_list = [item.serialize() for item in users]
            
    
    if "role" in body: 
        if body["role"] != "default":
            role = MusicRole.query.get(body["role"])
            if not role:
                return jsonify({"msg": "role not found"}), 404
            users = User.query.join(UserMusicRole).filter(
                UserMusicRole.music_role_id == body["role"]).all()
            if len(users) >= 1:
                users_r_list = [item.serialize() for item in users]

    if "gender" in body: 
        if body["gender"] != "default":
            gender = MusicGender.query.get(body["gender"])
            if not gender:
                return jsonify({"msg": "gender not found"}), 404
            users = User.query.join(UserMusicGender).filter(
                UserMusicGender.music_gender_id == body["gender"]).all()
            if len(users) >= 1:
                users_g_list = [item.serialize() for item in users]
    
    users_list = users_c_list + users_r_list + users_g_list
    if len(users_list) < 1:
        return jsonify({"error": "users not found"}), 404
    return jsonify(users_list), 200




# @api.route("/users/role/<int:role_id>", methods=["GET"])
# def get_all_users_by_role(role_id):
#     role = MusicRole.query.get(role_id)
#     if not role:
#         return jsonify({"msg": "role not found"}), 404
#     users = User.query.join(UserMusicRole).filter(
#         UserMusicRole.music_role_id == role_id).all()
#     if len(users) < 1:
#         return jsonify({"error": "users by role not found"}), 404
#     return jsonify([item.serialize() for item in users]), 200


# @api.route("/users/gender/<int:gender_id>", methods=["GET"])
# def get_all_users_by_gender(gender_id):
#     gender = MusicGender.query.get(gender_id)
#     if not gender:
#         return jsonify({"msg": "gender not found"}), 404
#     users = User.query.join(UserMusicGender).filter(
#         UserMusicGender.music_gender_id == gender_id).all()
#     if len(users) < 1:
#         return jsonify({"error": "users by gender not found"}), 404
#     return jsonify([item.serialize() for item in users]), 200


@api.route("/users/<int:user_id>/role/<int:role_id>", methods=["POST"])
def add_role_to_user(user_id, role_id):
    role_exist = UserMusicRole.query.filter_by(
        user_id=user_id, music_role_id=role_id).all()
    if role_exist:
        return jsonify({"error": "the role already exist in the user"}), 409
    new_music_role = UserMusicRole(user_id=user_id, music_role_id=role_id)
    db.session.add(new_music_role)
    db.session.commit()
    return jsonify({"msg": "role added"}), 200

@api.route("/users/<int:user_id>/role/<int:role_id>", methods=["PUT"])
def update_role_of_user(user_id, role_id):
    user_role = UserMusicRole.query.filter_by(user_id=user_id).first()

    if user_role:
        user_role.music_role_id = role_id  # Actualiza el rol musical
        db.session.commit()
        return jsonify({"msg": "Role updated successfully"}), 200
    else:
        return jsonify({"error": "User does not have an assigned role"}), 404


@api.route("/users/<int:user_id>/gender/<int:gender_id>", methods=["POST"])
def add_gender_to_user(user_id, gender_id):
    gender_exist = UserMusicGender.query.filter_by(
        user_id=user_id, music_gender_id=gender_id).all()
    if gender_exist:
        return jsonify({"error": "the gender already exist in the user"}), 409
    new_music_gender = UserMusicGender(
        user_id=user_id, music_gender_id=gender_id)
    db.session.add(new_music_gender)
    db.session.commit()
    return jsonify({"msg": "gender added"}), 200

@api.route("/users/<int:user_id>/gender/<int:gender_id>", methods=["PUT"])
def update_gender_of_user(user_id, gender_id):
    user_gender = UserMusicGender.query.filter_by(user_id=user_id).first()

    if user_gender:
        user_gender.music_gender_id = gender_id  # Actualiza el rol musical
        db.session.commit()
        return jsonify({"msg": "Gender updated successfully"}), 200
    else:
        return jsonify({"error": "User does not have an assigned gender"}), 404
