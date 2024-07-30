/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BoardService } from "../board.service";
import { BoardCreateInput } from "./BoardCreateInput";
import { Board } from "./Board";
import { BoardFindManyArgs } from "./BoardFindManyArgs";
import { BoardWhereUniqueInput } from "./BoardWhereUniqueInput";
import { BoardUpdateInput } from "./BoardUpdateInput";

export class BoardControllerBase {
  constructor(protected readonly service: BoardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Board })
  async createBoard(@common.Body() data: BoardCreateInput): Promise<Board> {
    return await this.service.createBoard({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        posterImageUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Board] })
  @ApiNestedQuery(BoardFindManyArgs)
  async boards(@common.Req() request: Request): Promise<Board[]> {
    const args = plainToClass(BoardFindManyArgs, request.query);
    return this.service.boards({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        posterImageUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Board })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async board(
    @common.Param() params: BoardWhereUniqueInput
  ): Promise<Board | null> {
    const result = await this.service.board({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        posterImageUrl: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Board })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBoard(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() data: BoardUpdateInput
  ): Promise<Board | null> {
    try {
      return await this.service.updateBoard({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          posterImageUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Board })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBoard(
    @common.Param() params: BoardWhereUniqueInput
  ): Promise<Board | null> {
    try {
      return await this.service.deleteBoard({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          posterImageUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
