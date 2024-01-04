from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/', methods=['GET'])
def ana():
  return jsonify({'anasayfa': "1"})

  
@app.route('/nem', methods=['GET'])
def get_yuzdelik():
    # Rastgele bir yüzdelik değeri oluştur
    yuzdelik = random.randint(0, 100)
    # JSON formatında yanıt döndür
    return jsonify({'nem': yuzdelik})

@app.route('/foto', methods=['GET'])
def get_foto():
    # Fotoğrafın URL'sini içeren JSON yanıtı döndür
    foto_url = "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/36217/uploads/urunresimleri/buyuk/pachyveria-sukulent-ozel-tur-f74018.jpeg"
    return jsonify({'foto_url': foto_url})

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', port=80)
