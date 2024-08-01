from flask_sqlalchemy import SQLAlchemy
from enum import Enum as PyEnum

db = SQLAlchemy()

class Gender(PyEnum):
    FEMALE = "Female"
    MALE = "Male"
    OTHER ="Other"

class MusicGender(PyEnum):
    ROCK = "Rock"
    JAZZ = "Jazz"
    URBAN = "Urban"
    BLUES = "Blues"
    CLASSIC = "Classic"
    FOLKLORE = "Folklore"
    ELECTRO = "Electro"
    REGGAE = "Reggae"
    METAL = "Metal"
    INDIE = "Indie"

class Role(PyEnum):
    GUITARIST = "Guitarist"
    SINGER = "Singer"
    BASSIST = "Bassits"
    DRUMMER = "Drummer"
    VIOLINIST = "Violinist"
    PIANIST = "Pianist"
    DJ = "Dj"
    AUDIOENGINEER = "Audio engineer"
    TRUMPETER = "Trumpeter"
    UKELELE = "Ukelele"

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
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(180), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # son adiciones
    name = db.Colum(db.String(120), unique=False, nullable=False)
    lastname = db.Colum(db.String(120), unique=False, nullable=False)
    nickname = db.Colum(db.String(120), unique=True, nullable=False) #revisar el unique
    #date_of_birth = db.Colum(db.String(120), unique=False, nullable=False) #revisar
    gender = db.Colum(db.Enum(Gender), unique=False, nullable=False)
    music_gender = db.Colum(db.Enum(MusicGender), unique=False, nullable=False)
    role = db.Colum(db.Enum(Role), unique=False, nullable=False)
    country = db.Colum(db.Enum(Country), unique=False, nullable=False)

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
            "music_gender": self.music_gender.value,
            "role": self.role.value,
            "country": self.country.value
        }
    

