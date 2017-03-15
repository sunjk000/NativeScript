export namespace domains {
    export namespace network {
        export interface NetworkDomainDebugger {
            create(): domains.network.NetworkRequest;
        }
        
        export interface Headers {
        }

        export interface Request {
            url: string;
            method: string;
            headers: domains.network.Headers;
            postData?: string;
        }

        export interface Response {
            url: string;
            status: number;
            statusText: string;
            headers: Headers;
            headersText?: string;
            mimeType: string;
            requestHeaders?: domains.network.Headers;
            requestHeadersText?: string;
            fromDiskCache?: boolean;
        }

        export interface NetworkRequest {
            mimeType: string;
            data: any;
            responseReceived(response: domains.network.Response);
            loadingFinished();
            requestWillBeSent(request: domains.network.Request);
        }
    }
}

var network;

export function getNetwork(): domains.network.NetworkDomainDebugger {
    return network;
}
export function setNetwork(newNetwork: domains.network.NetworkDomainDebugger) {
    network = newNetwork;
}

export namespace NetworkAgent {
    export interface Request {
        url: string;
        method: string;
        headers: any;
        postData?: string;
    }

    export interface RequestData {
        requestId: string;
        url: string;
        request: Request;
        timeStamp: number;
        type: string;
    }

    export interface Response {
        url: string;
        status: number;
        statusText: string;
        headers: any;
        headersText?: string;
        mimeType: string;
        fromDiskCache?: boolean;
    }

    export interface ResponseData {
        requestId: string;
        type: string;
        response: Response;
        timeStamp: number;
    }

    export interface SuccessfulRequestData {
        requestId: string;
        data: string;
        hasTextContent: boolean;
    }

    export interface LoadingFinishedData {
        requestId: string;
        timeStamp: number;
    }
}
