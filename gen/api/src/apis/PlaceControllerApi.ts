/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    PlaceEntity,
    PlaceEntityFromJSON,
    PlaceEntityToJSON,
} from '../models';

export interface GetPlaceUsingGETRequest {
    id: number;
}

/**
 * no description
 */
export class PlaceControllerApi extends runtime.BaseAPI {

    /**
     * getAllPlaces
     */
    async getAllPlacesUsingGETRaw(): Promise<runtime.ApiResponse<Array<PlaceEntity>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/places`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PlaceEntityFromJSON));
    }

    /**
     * getAllPlaces
     */
    async getAllPlacesUsingGET(): Promise<Array<PlaceEntity>> {
        const response = await this.getAllPlacesUsingGETRaw();
        return await response.value();
    }

    /**
     * getPlace
     */
    async getPlaceUsingGETRaw(requestParameters: GetPlaceUsingGETRequest): Promise<runtime.ApiResponse<PlaceEntity>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPlaceUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/places/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PlaceEntityFromJSON(jsonValue));
    }

    /**
     * getPlace
     */
    async getPlaceUsingGET(requestParameters: GetPlaceUsingGETRequest): Promise<PlaceEntity> {
        const response = await this.getPlaceUsingGETRaw(requestParameters);
        return await response.value();
    }

}
