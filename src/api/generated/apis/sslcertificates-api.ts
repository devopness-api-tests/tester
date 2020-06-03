/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { SslCertificate } from '../../generated/models';

/**
 * SSLCertificatesApiService - Auto-generated
 */
export class SSLCertificatesApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a SSL certificate
     * @param {number} id The unique id of the record to be deleted
     */
    public async deleteSslCertificate(id: number): Promise<ApiResponse<void>> {
        if (id === null || id === undefined) {
            throw new ArgumentNullException('id', 'deleteSslCertificate');
        }
        const response = await this.delete <void>(`/ssl-certificates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get details of a single SSL certificate
     * @param {number} id Unique ID of the item to be retrieved
     */
    public async getSslCertificate(id: number): Promise<ApiResponse<SslCertificate>> {
        if (id === null || id === undefined) {
            throw new ArgumentNullException('id', 'getSslCertificate');
        }
        const response = await this.get <SslCertificate>(`/ssl-certificates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id))));
        return new ApiResponse(response);
    }
}