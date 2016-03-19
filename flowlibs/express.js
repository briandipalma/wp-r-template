declare class ExpressRequest {
	url: string;
}

declare class ExpressResponse {
	send(x: string): void;
}

export type {ExpressRequest};
export type {ExpressResponse};
