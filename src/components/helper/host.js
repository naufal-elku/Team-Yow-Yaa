// export const API_TRACKING_HOST = "http://localhost:8080/"
// export const MAIN_TRACKING_HOST = 'http://localhost:8080/'
// export const BACKEND_API_TRACKING_HOST = "http://localhost:8080/backend/"

const NODE_ENV = process.env.NODE_ENV || "production";
const APP_ENV = process.env.APP_ENV || "production";

let API_HOST, MAIN_HOST, BACKEND_API_HOST, IMG_HOST, CMS_HOST, DEFAULT_IMG, BACKEND_API_FRONT;

if (NODE_ENV == "production") {
  API_HOST = "https://services.presensi.co.id/";
  MAIN_HOST = "https://services.presensi.co.id/";
  BACKEND_API_HOST = "https://services.presensi.co.id/backend/";
  IMG_HOST = "https://services.presensi.co.id/media/";
  CMS_HOST = "https://mitra.presensi.co.id/";
  DEFAULT_IMG = MAIN_HOST + "media/logo-default-user.png";
} else {
  if (APP_ENV === "local") {
    API_HOST = "http://localhost:8000/";
    MAIN_HOST = "http://localhost:8000/";
    BACKEND_API_HOST = "http://localhost:8000/backend/";
    IMG_HOST = "http://localhost:8000/media/";
    DEFAULT_IMG = MAIN_HOST + "media/logo-default-user.png";
  } else if (APP_ENV === "development") {
    API_HOST = "https://servicesdev.presensi.co.id/";
    MAIN_HOST = "https://servicesdev.presensi.co.id/";
    BACKEND_API_HOST = "https://servicesdev.presensi.co.id/backend/";
    CMS_HOST = "https://presensi.co.id/";
    IMG_HOST = "https://servicesdev.presensi.co.id/media/";
    DEFAULT_IMG = MAIN_HOST + "media/logo-default-user.png";
    BACKEND_API_FRONT = "https://services-dev.presensi.co.id/frontapp/";
  } else {
    API_HOST = "https://services.presensi.co.id/";
    MAIN_HOST = "https://services.presensi.co.id/";
    BACKEND_API_HOST = "https://services.presensi.co.id/backend/";
    IMG_HOST = "https://services.presensi.co.id/media/";
    CMS_HOST = "https://mitra.presensi.co.id/";
    DEFAULT_IMG = MAIN_HOST + "media/logo-default-user.png";
    BACKEND_API_FRONT = "https://services-dev.presensi.co.id/frontapp/";
  }
}
export {
  API_HOST,
  MAIN_HOST,
  BACKEND_API_HOST,
  IMG_HOST,
  CMS_HOST,
  DEFAULT_IMG,
  BACKEND_API_FRONT,
};

export const THUMB_HOST = MAIN_HOST + "media/image/thumb/";

export const APIKEY = "AIzaSyAn3PgsveGi-bW-JH6YofGEoxk3UJwZr3E";
