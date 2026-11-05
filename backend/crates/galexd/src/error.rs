//! Error type shared by every HTTP handler.
//!
//! Handlers return `Result<T, ApiError>`; anything that fails deeper down is
//! converted with [`ApiError::internal`] so the client always receives a JSON
//! body of the shape `{ "error": "..." }`.

use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    Json,
};
use serde_json::json;

#[derive(Debug)]
pub struct ApiError {
    pub status: StatusCode,
    pub message: String,
}

impl ApiError {
    pub fn new(status: StatusCode, message: impl Into<String>) -> Self {
        Self {
            status,
            message: message.into(),
        }
    }

    pub fn not_found(what: impl std::fmt::Display) -> Self {
        Self::new(StatusCode::NOT_FOUND, format!("{what} not found"))
    }

    pub fn bad_request(what: impl std::fmt::Display) -> Self {
        Self::new(StatusCode::BAD_REQUEST, what.to_string())
    }

    pub fn conflict(what: impl std::fmt::Display) -> Self {
        Self::new(StatusCode::CONFLICT, what.to_string())
    }

    pub fn internal(err: impl std::fmt::Display) -> Self {
        Self::new(StatusCode::INTERNAL_SERVER_ERROR, err.to_string())
    }
}

impl std::fmt::Display for ApiError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}: {}", self.status, self.message)
    }
}

impl std::error::Error for ApiError {}

impl IntoResponse for ApiError {
    fn into_response(self) -> Response {
        if self.status.is_server_error() {
            tracing::error!(%self.message, "request failed");
        }
        (self.status, Json(json!({ "error": self.message }))).into_response()
    }
}

pub type ApiResult<T> = Result<T, ApiError>;
