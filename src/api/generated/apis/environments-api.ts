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
import { Environment } from '../../generated/models';
import { EnvironmentUpdate } from '../../generated/models';

/**
 * EnvironmentsApiService - Auto-generated
 */
export class EnvironmentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given environment
     * @param {number} environmentId Unique ID of the environment to delete
     */
    public async deleteEnvironment(environmentId: number): Promise<ApiResponse<void>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'deleteEnvironment');
        }
        const response = await this.delete <void>(`/environments/{environment_id}`.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get an environment by ID
     * @param {number} environmentId Unique ID of the environment to get
     */
    public async getEnvironment(environmentId: number): Promise<ApiResponse<Environment>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'getEnvironment');
        }
        const response = await this.get <Environment>(`/environments/{environment_id}`.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update a given environment
     * @param {number} environmentId Unique ID of the environment to update
     * @param {EnvironmentUpdate} environmentUpdate A JSON object containing environment data
     */
    public async updateEnvironment(environmentId: number, environmentUpdate: EnvironmentUpdate): Promise<ApiResponse<void>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'updateEnvironment');
        }
        if (environmentUpdate === null || environmentUpdate === undefined) {
            throw new ArgumentNullException('environmentUpdate', 'updateEnvironment');
        }
        const response = await this.put <void, EnvironmentUpdate>(`/environments/{environment_id}`.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))), environmentUpdate);
        return new ApiResponse(response);
    }
}
