from flask_sqlalchemy import SQLAlchemy
from enum import Enum as PyEnum

db = SQLAlchemy()

class Gender(PyEnum):
    FEMALE = "Female"
    MALE = "Male"
    OTHER ="Other"

class Country(PyEnum):
    COLOMBIABOGOTA = "Colombia-Bogota"
    VENEZUELACARACAS = "Venezuela-Caracas"
    ECUADORQUITO = "Ecuador-Quito"
    PERULIMA = "Peru-Lima"
    BOLIVIALAPAZ = "Bolivia-La paz"
    MEXICOCDMX = "Mexico-CDMX"
    CHILESANTIAGO = "Chile-Santiago"
    PARAGUAYASUNCION = "Paraguay-Asuncion"
    URUGUAYMONTEVIDEO ="Uruguay-Montevideo"
    ARGENTINABSAS = "Argentina.BSAS"

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(180), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # son adiciones
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    nickname = db.Column(db.String(120), unique=True, nullable=False) #revisar el unique
    #date_of_birth = db.Colum(db.String(120), unique=False, nullable=False) #revisar
    gender = db.Column(db.Enum(Gender), unique=False, nullable=False)
    music_genders = db.relationship("UserMusicGender", backref="user")
    music_roles = db.relationship("UserMusicRole", backref="user")
    country = db.Column(db.Enum(Country), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
            "name": self.name,
            "lastname": self.lastname,
            "nickname": self.nickname,
            "gender": self.gender.value,
            "music_genders": [music_gender.full_serialize() for music_gender in self.music_genders], 
            "music_roles": [music_role.full_serialize() for music_role in self.music_roles],
            "country": self.country.value
        }
    

class MusicGender(db.Model):
    __tablename__ = "music_gender"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    music_genders = db.relationship("UserMusicGender", backref="music_gender")

    def __repr__(self):
        return f'<MusicGender name: {self.name}>'

    def serialize(self):
        return {
            "id": self.id, 
            "name": self.name
        }  

class UserMusicGender(db.Model):
    __tablename__ = "user_music_gender"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    music_gender_id = db.Column(db.Integer, db.ForeignKey("music_gender.id"))

    def __repr__(self):
        return f'<UserMusicGender user: {self.user_id} music gender: {self.music_gender_id}>'
    
    def serialize(self):
        return {
            "id": self.id, 
            "user_id": self.user_id, 
            "music_gender_id": self.music_gender_id
        }
    
    def full_serialize(self):
        music_gender = MusicGender.query.get(self.music_gender_id)
        return music_gender.serialize()
        
    
class MusicRole(db.Model):
    __tablename__ = "music_role"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    music_roles = db.relationship("UserMusicRole", backref="music_role")

    def __repr__(self):
        return f'<MusicRole name: {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id, 
            "name": self.name
        }

class UserMusicRole(db.Model):
    __tablename__ = "user_music_role"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    music_role_id = db.Column(db.Integer, db.ForeignKey("music_role.id"))

    def __repr__(self):
        return f'<UserMusicRole user: {self.user_id} music role: {self.music_role_id}>'
    
    def serialize(self):
        return {
            "id": self.id, 
            "user_id": self.user_id, 
            "music_role_id": self.music_role_id
        }
    
    def full_serialize(self):
        music_role = MusicRole.query.get(self.music_role_id)
        return music_role.serialize()