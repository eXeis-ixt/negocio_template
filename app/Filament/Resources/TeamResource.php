<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TeamResource\Pages;
use App\Filament\Resources\TeamResource\RelationManagers;
use App\Models\Team;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TeamResource extends Resource
{
    protected static ?string $model = Team::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('team_name')
                    ->required(),
                Forms\Components\TextInput::make('leader_name')
                    ->required(),
                Forms\Components\TextInput::make('leader_email')
                    ->email()
                    ->required(),
                Forms\Components\TextInput::make('leader_phone')
                    ->tel(),
                Forms\Components\TextInput::make('leader_uni'),
                Forms\Components\TextInput::make('leader_dept'),
                Forms\Components\TextInput::make('membertwo_name')
                    ->required(),
                Forms\Components\TextInput::make('membertwo_email')
                    ->email()
                    ->required(),
                Forms\Components\TextInput::make('membertwo_phone')
                    ->tel(),
                Forms\Components\TextInput::make('membertwo_uni'),
                Forms\Components\TextInput::make('membertwo_dept'),
                Forms\Components\TextInput::make('memberthree_name'),
                Forms\Components\TextInput::make('memberthree_email')
                    ->email(),
                Forms\Components\TextInput::make('memberthree_phone')
                    ->tel(),
                Forms\Components\TextInput::make('memberthree_uni'),
                Forms\Components\TextInput::make('memberthree_dept'),
                Forms\Components\TextInput::make('memberfour_name'),
                Forms\Components\TextInput::make('memberfour_email')
                    ->email(),
                Forms\Components\TextInput::make('memberfour_phone')
                    ->tel(),
                Forms\Components\TextInput::make('memberfour_uni'),
                Forms\Components\TextInput::make('memberfour_dept'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('team_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('leader_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('leader_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('leader_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('leader_uni')
                    ->searchable(),
                Tables\Columns\TextColumn::make('leader_dept')
                    ->searchable(),
                Tables\Columns\TextColumn::make('membertwo_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('membertwo_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('membertwo_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('membertwo_uni')
                    ->searchable(),
                Tables\Columns\TextColumn::make('membertwo_dept')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberthree_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberthree_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberthree_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberthree_uni')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberthree_dept')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfour_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfour_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfour_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfour_uni')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfour_dept')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTeams::route('/'),
            'create' => Pages\CreateTeam::route('/create'),
            'edit' => Pages\EditTeam::route('/{record}/edit'),
        ];
    }
}
