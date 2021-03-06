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
import { ApiError } from '../../generated/models';
import { Deployment } from '../../generated/models';
import { DeploymentCreate } from '../../generated/models';

/**
 * ProjectsDeploymentsApiService - Auto-generated
 */
export class ProjectsDeploymentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Trigger a new deployment, on the current project
     * @param {number} projectId Numeric ID of the project for which a deployment is being triggered
     * @param {DeploymentCreate} deploymentCreate A JSON object containing deployment data
     */
    public async deployProjectApps(projectId: number, deploymentCreate: DeploymentCreate): Promise<ApiResponse<void>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'deployProjectApps');
        }
        if (deploymentCreate === null || deploymentCreate === undefined) {
            throw new ArgumentNullException('deploymentCreate', 'deployProjectApps');
        }
        const response = await this.post <void, DeploymentCreate>(`/projects/{project_id}/deployments`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), deploymentCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Returns a list of all deployments belonging to a project
     * @param {number} projectId Numeric ID of the project to get deployments from
     */
    public async listProjectDeployments(projectId: number): Promise<ApiResponse<Array<Deployment>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectDeployments');
        }
        const response = await this.get <Array<Deployment>>(`/projects/{project_id}/deployments`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
