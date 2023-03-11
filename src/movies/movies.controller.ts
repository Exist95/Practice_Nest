import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all moives';
  }

  @Get('search')
  search(@Query('year') seachingYear: string) {
    return `We are searching for a moive made after ${seachingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one moive with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete()
  remove(@Param('id') movieId: string) {
    return `This will delete a moive with the id: ${movieId}`;
  }

  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updataData) {
    return {
      updataMovie: movieId,
      ...updataData,
    };
  }
}
