/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Work
 */
export interface Work {
    /**
     * 
     * @type {string}
     * @memberof Work
     */
    item: string;
    /**
     * 
     * @type {string}
     * @memberof Work
     */
    memo: string;
    /**
     * 
     * @type {Date}
     * @memberof Work
     */
    startDatetime: Date;
    /**
     * 
     * @type {Date}
     * @memberof Work
     */
    endDatetime: Date;
    /**
     * 
     * @type {number}
     * @memberof Work
     */
    duration: number;
    /**
     * 
     * @type {number}
     * @memberof Work
     */
    workId: number;
}

export function WorkFromJSON(json: any): Work {
    return WorkFromJSONTyped(json, false);
}

export function WorkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Work {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item': json['item'],
        'memo': json['memo'],
        'startDatetime': (new Date(json['start_datetime'])),
        'endDatetime': (new Date(json['end_datetime'])),
        'duration': json['duration'],
        'workId': json['work_id'],
    };
}

export function WorkToJSON(value?: Work | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item': value.item,
        'memo': value.memo,
        'start_datetime': (value.startDatetime.toISOString()),
        'end_datetime': (value.endDatetime.toISOString()),
        'duration': value.duration,
        'work_id': value.workId,
    };
}
